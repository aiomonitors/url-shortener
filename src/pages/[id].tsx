import React, { useEffect } from "react";
import {
  NextPage,
  GetStaticPropsResult,
  GetStaticPathsResult,
  GetStaticPropsContext,
} from "next";
import styled from "styled-components";
import Head from "next/head";
import { PrismaClient } from "@prisma/client";
import { MetatagsResponse } from "../types";
import MetatagsFetcher from "../utils/metatags-fetcher";

const prisma = new PrismaClient();

const PageWrapper = styled.div`
  background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Glass = styled.div`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const PageContainer = styled.div`
  height: min-content;
  width: 300px;

  @media only screen and (max-width: 300px) {
    width: 90%;
  }
`;

export interface InitialRedirectProps {
  url: unknown;
  metadata: MetatagsResponse;
}

const GlassMain = styled(Glass)`
  width: 100%;
  height: min-content;
  min-height: 40px;
  word-wrap: break-word;
  box-sizing: border-box;
  padding: 5px 10px;
  color: #3498db;
`;

const Page: NextPage<InitialRedirectProps> = ({
  url,
  metadata,
}: InitialRedirectProps) => {
  useEffect(() => {
    setTimeout(() => {
      window.location = url as Location;
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        {typeof metadata === "object" ? (
          Object.keys(metadata).map((key) => {
            if (key === "title") {
              return <title>{metadata.title || metadata["og:title"]}</title>;
            }
            // eslint-disable-next-line react/jsx-key
            return <meta property={key} content={metadata[key]} />;
          })
        ) : (
          <>
            <title>URL Shortner</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
            />
            <meta name="theme-color" content="#ffffff" />
            <meta property="og:url" content="https://short.shihab.dev" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@aiomonitors" />
            <meta property="og:title" content="URL Shortner" />
            <meta
              property="og:description"
              content="Beautifully shorten URLs that are just hideously long"
            />
          </>
        )}
      </Head>
      <PageWrapper>
        <PageContainer>
          <GlassMain>Redirecting you to {url}...</GlassMain>
        </PageContainer>
      </PageWrapper>
    </>
  );
};
export async function getStaticProps(
  context: GetStaticPropsContext<{ id: string }>
): Promise<GetStaticPropsResult<InitialRedirectProps>> {
  const { url } = await prisma.shortened.findUnique({
    where: { id: context.params.id },
  });
  let metadata: MetatagsResponse = null;
  if (url) {
    try {
      const metadataResponse = await MetatagsFetcher(url);
      if (metadataResponse) {
        metadata = metadataResponse;
      }
    } catch (err) {
      metadata = null;
    }
  }

  return {
    props: {
      url,
      metadata,
    },
    revalidate: 300,
  };
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const allEntries = await prisma.shortened.findMany();
  return {
    paths: [...allEntries.map((entry) => ({ params: { id: entry.id } }))],
    fallback: "blocking",
  };
}

export default Page;
