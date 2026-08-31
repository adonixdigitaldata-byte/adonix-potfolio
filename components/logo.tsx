import Image from "next/image";
import type { Locale } from "@/lib/i18n";

export function Logo({ locale }: { locale: Locale }) {
  const mainSiteUrl = locale === "ar" ? "https://www.adonixdigital.com/" : "https://www.adonixdigital.com/en/";
  return (
    <a href={mainSiteUrl} className="logo" aria-label="Adonix Digital">
      <Image src="/logo.svg" alt="Adonix" width={205} height={78} priority />
    </a>
  );
}

