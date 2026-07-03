import type { Metadata } from "next";

export const SITE_NAME = "LynxLogic";
export const SITE_URL = "https://lynxlogic.ai";

interface BuildMetadataOptions {
  title: string;
  description: string;
  path: string;
}

/** Shared shape for per-page metadata, including Open Graph and Twitter card fields. */
export function buildMetadata({
  title,
  description,
  path,
}: BuildMetadataOptions): Metadata {
  const url = new URL(path, SITE_URL).toString();

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
