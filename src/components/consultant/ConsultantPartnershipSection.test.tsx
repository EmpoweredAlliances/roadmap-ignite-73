import { describe, it, expect, beforeAll } from "vitest";
import { render } from "@testing-library/react";
import ConsultantPartnershipSection from "./ConsultantPartnershipSection";
import { SLASH_LABEL_BASE } from "@/components/ui/SlashLabel";

// Stub IntersectionObserver (used by framer-motion's useInView)
beforeAll(() => {
  class IO {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() { return []; }
  }
  // @ts-expect-error - jsdom polyfill
  globalThis.IntersectionObserver = IO;
});

const SLASH_LABELS = [
  "INDUSTRY / FUNCTION EXPERTISE",
  "CREDIBILITY / CONTINUITY",
  "FACILITATION SUPPORT / DECISION FLOW",
  "STRUCTURED OUTPUTS / ARTIFACTS",
];

describe("ConsultantPartnershipSection — slash labels", () => {
  it("renders all uppercase slash labels", () => {
    render(<ConsultantPartnershipSection />);
    for (const label of SLASH_LABELS) {
      expect(screen.getByText(label)).toBeInTheDocument();
    }
  });

  it("each slash label uses the shared SlashLabel component (data-slot + base classes)", () => {
    const { container } = render(<ConsultantPartnershipSection />);
    const labels = container.querySelectorAll('[data-slot="slash-label"]');
    // 4 + 4 + 5 items across the three columns
    expect(labels.length).toBe(13);

    // Verify wrapping-friendly classes are applied so labels never overflow on mobile
    const requiredClasses = ["uppercase", "break-words", "tracking-[0.08em]"];
    labels.forEach((el) => {
      const cls = el.className;
      requiredClasses.forEach((c) => expect(cls).toContain(c));
    });

    // Sanity: shared base string still includes the wrapping primitives
    expect(SLASH_LABEL_BASE).toContain("break-words");
    expect(SLASH_LABEL_BASE).toContain("uppercase");
  });

  it("snapshot of partnership label markup stays stable across copy changes to non-label elements", () => {
    const { container } = render(<ConsultantPartnershipSection />);
    const labelMarkup = Array.from(
      container.querySelectorAll('[data-slot="slash-label"]')
    ).map((el) => `${el.tagName}|${el.className}|${el.textContent}`);
    expect(labelMarkup).toMatchSnapshot();
  });
});
