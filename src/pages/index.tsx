import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useSWR from "swr";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import * as z from "zod";
import Head from "next/head";
import MetadataComponent from "../components/MetadataComponent";
import fetcher from "../utils/swr-fetcher";
import Input from "../components/Input";
import Button from "../components/Button";
import postShorten from "../utils/postShorten";
import { SuccessResponse, ErrorResponse } from "./api/create";
import Shortened from "../components/Shortened";

const Page = styled.div`
  background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 448px) {
    height: -webkit-fill-available !important;
  }
`;

const PageContainer = styled(motion.div)`
  height: min-content;
  width: 300px;

  @media screen and (max-width: 300px) {
    width: 95%;
  }
`;

const IndexPage = (): JSX.Element => {
  const [url, setURL] = useState("");
  const { data } = useSWR(`/api/metadata?url=${url}`, fetcher);
  const [shortened, setShortened] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    if (url.length === 0) {
      setShortened("");
    }
  }, [url]);
  useEffect(() => {
    setLoading(false);
  }, [shortened]);

  const onButtonClick = async (e: React.SyntheticEvent): Promise<void> => {
    const urlParse = z.string().url({ message: "Invalid url" });
    e.preventDefault();
    setLoading(true);
    try {
      const parsedString = urlParse.parse(url);
      const response = await postShorten(parsedString);
      if (Object.keys(response).includes("error")) {
        toast.error((response as ErrorResponse)?.error);
      } else {
        const fullURL = `https://short.shihab.dev/${
          (response as SuccessResponse)?.id
        }`;
        setShortened(fullURL);
        navigator.clipboard?.writeText(fullURL);
        toast.success("Copied shortened URL to clipboard!");
      }
    } catch (err) {
      if (err.message?.includes("Invalid url")) {
        toast.error("Invalid URL");
      }
    }
  };

  return (
    <Page>
      <Head>
        <link rel="shortcut icon" href="/link.ico" />
        <link rel="icon" href="/link.ico" />
        <title>Short</title>
        <meta name="author" content="Shihab Chowdhury" />
        <meta
          name="description"
          content="Beautifully shorten URLs that are just hideously long"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta
          property="og:image"
          content="https://og.scoutapp.ai/api/thumbnail?path=https:/short.shihab.dev"
        />
        <meta
          property="twitter:image"
          content="https://og.scoutapp.ai/api/thumbnail?path=https:/short.shihab.dev"
        />
        <meta property="og:url" content="https://short.shihab.dev" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="https://short.shihab.dev" />
        <meta name="twitter:creator" content="@aiomonitors" />
        <meta
          property="twitter:description"
          content="Beautifully shorten URLs that are just hideously long"
        />
        <meta property="og:title" content="Short" />
        <meta
          property="og:description"
          content="Beautifully shorten URLs that are just hideously long"
        />
      </Head>
      <PageContainer layout transition={{ layoutY: { duration: "0.1" } }}>
        <Input
          value={url}
          placeholder="URL"
          onChange={(e) => {
            setURL(e);
          }}
        />
        <Button onClick={onButtonClick} loading={loading}>
          Shorten URL &nbsp;&nbsp;&rarr;
        </Button>
        {shortened && <Shortened>{shortened}</Shortened>}
        {!!url && <MetadataComponent data={data} />}
      </PageContainer>
    </Page>
  );
};

export default IndexPage;
