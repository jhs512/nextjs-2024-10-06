import { Metadata } from "next";

export const metadata: Metadata = {
  title: '사이트 제목',
  description: '사이트 설명',
};

export default function RootLayout(
  { children } : Readonly<{children: React.ReactNode}>
) {

  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}