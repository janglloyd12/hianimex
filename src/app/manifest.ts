import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hianime",
    short_name: "Hianime",
    description: "Watch your favorite anime shows without any interupts.",
    start_url: "/home",
    display: "standalone",
    background_color: "#201f31",
    theme_color: "#201f31",
  };
}
