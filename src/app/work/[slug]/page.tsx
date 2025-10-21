import { notFound } from "next/navigation";
import { getPosts } from "@/utils/utils";
import {
  Meta,
  Schema,
  AvatarGroup,
  Column,
  Heading,
  Media,
  Text,
  SmartLink,
  Row,
  Line,
} from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { ScrollToHash, CustomMDX } from "@/components";
import { Metadata } from "next";
import { Projects } from "@/components/work/Projects";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "work", "projects"]);
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
                                         params,
                                       }: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug) ? routeParams.slug.join("/") : routeParams.slug || "";
  const posts = getPosts(["src", "app", "work", "projects"]);
  const post = posts.find((p) => p.slug === slugPath);
  if (!post) return {};

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL,
    image: post.metadata.image || `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`,
    path: `${work.path}/${post.slug}`,
  });
}

export default async function Project({
                                        params,
                                      }: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug) ? routeParams.slug.join("/") : routeParams.slug || "";
  const post = getPosts(["src", "app", "work", "projects"]).find((p) => p.slug === slugPath);
    if (!post) {
        return (
            <Column as="section" maxWidth="m" horizontal="center" gap="l">
                <Text variant="body-default-s">
                    Aucune réalisation disponible pour le moment.
                </Text>
            </Column>
        );
    }

  const avatars =
      post!.metadata.team?.map((m: { avatar: string }) => ({
        src: m.avatar,
      })) || [];

  return (
      <Column as="section" maxWidth="m" horizontal="center" gap="l">
        <Schema
            as="blogPosting"
            baseURL={baseURL}
            path={`${work.path}/${post!.slug}`}
            title={post!.metadata.title}
            description={post!.metadata.summary}
            datePublished={post!.metadata.publishedAt}
            dateModified={post!.metadata.publishedAt}
            image={post!.metadata.image || `/api/og/generate?title=${encodeURIComponent(post!.metadata.title)}`}
            author={{
              name: person.name,
              url: `${baseURL}${about.path}`,
              image: `${baseURL}${person.avatar}`,
            }}
        />

        <Column maxWidth="s" gap="16" horizontal="center" align="center">
          <SmartLink href="/work">
            <Text variant="label-strong-m">Projects</Text>
          </SmartLink>
          <Text variant="body-default-xs" onBackground="neutral-weak" marginBottom="12">
            {post!.metadata.publishedAt && formatDate(post!.metadata.publishedAt)}
          </Text>
          <Heading variant="display-strong-m">{post!.metadata.title}</Heading>
        </Column>

        {post!.metadata.images.length > 0 && (
            <Media priority aspectRatio="16 / 9" radius="m" alt="image" src={post!.metadata.images[0]} />
        )}

        <Row marginBottom="24" horizontal="center">
          <Row gap="16" vertical="center">
            {post!.metadata.team && <AvatarGroup reverse avatars={avatars} size="s" />}
            {post!.metadata.team && (
                <Text variant="label-default-m" onBackground="brand-weak">
                  {post!.metadata.team.map(
                      (member: { name: string; linkedIn?: string }, idx: number) => (
                          <span key={idx}>
                    {idx > 0 && (
                        <Text as="span" onBackground="neutral-weak">
                          ,{" "}
                        </Text>
                    )}
                            {member.linkedIn ? (
                                <SmartLink href={member.linkedIn}>{member.name}</SmartLink>
                            ) : (
                                member.name
                            )}
                  </span>
                      ),
                  )}
                </Text>
            )}
          </Row>
        </Row>

        <Column as="article" maxWidth="xs" style={{ margin: "auto" }}>
          <CustomMDX source={post!.content} />
        </Column>

        <Column fillWidth gap="40" horizontal="center" marginTop="40">
          <Line maxWidth="40" />
          <Heading as="h2" variant="heading-strong-xl" marginBottom="24">
            Related projects
          </Heading>
          <Projects exclude={[post!.slug]} range={[2]} />
        </Column>

        <ScrollToHash />
      </Column>
  );
}
