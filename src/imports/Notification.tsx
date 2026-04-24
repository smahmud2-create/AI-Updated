import svgPaths from "./svg-wdmk3eryc5";

export default function Notification({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-name=".Notification">
      <div className="absolute h-[17.7px] left-[4px] top-[3px] w-[16px]" data-name="Vector">
        <div className="absolute inset-[-4.24%_-4.69%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 19.2">
            <path d={svgPaths.p7533f70} id="Vector" stroke="var(--stroke-0, #211E22)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}