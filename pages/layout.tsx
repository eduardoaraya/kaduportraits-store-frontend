import { Layout as UILayout } from "@kaduportraits-store/components/ui/layout";
import { GlobalProvider } from "@kaduportraits-store/providers/global-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlobalProvider>
      <UILayout>{children}</UILayout>
    </GlobalProvider>
  );
}
