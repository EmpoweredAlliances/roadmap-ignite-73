import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

/**
 * SlashLabel — shared style for short uppercase labels that may contain
 * " / " separators (e.g. "INDUSTRY / FUNCTION EXPERTISE").
 *
 * Ensures clean wrapping on mobile: the slash and surrounding words can
 * break naturally without overflow, and tracking stays consistent.
 *
 * Tone variants map to the partnership section's three columns.
 */
export type SlashLabelTone = "default" | "muted" | "onDark";

const toneClass: Record<SlashLabelTone, string> = {
  default: "text-foreground",
  muted: "text-muted-foreground",
  onDark: "text-white/75",
};

interface SlashLabelProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: SlashLabelTone;
  children: React.ReactNode;
}

export const SLASH_LABEL_BASE =
  "font-body text-[12px] sm:text-[13px] font-semibold uppercase " +
  "tracking-[0.08em] leading-[1.5] break-words [word-spacing:0.05em]";

export const SlashLabel = ({
  tone = "default",
  className,
  children,
  ...rest
}: SlashLabelProps) => (
  <span
    data-slot="slash-label"
    className={cn(SLASH_LABEL_BASE, toneClass[tone], className)}
    {...rest}
  >
    {children}
  </span>
);

export default SlashLabel;
