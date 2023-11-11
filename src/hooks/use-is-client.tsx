import { isClientSide } from "@kaduportraits-store/utils/environment-indicator";
import { useEffect, useState } from "react";

export function useIsClient() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(isClientSide());
  }, []);

  return { isClient };
}
