import { Metadata } from "next";
import CVEditor from "./CVEditor";

export const metadata: Metadata = {
  title: "Design your CV",
};

export default function Page() {
  return <CVEditor />
}
