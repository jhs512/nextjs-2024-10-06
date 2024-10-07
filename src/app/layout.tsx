import { Metadata } from "next";

export const metadata: Metadata = {
  title: "사이트 제목",
  description: "사이트 설명",
};

type Props = { children: React.ReactNode };

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
