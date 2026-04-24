import svgPaths from "./svg-i65f93lgmq";

function Icon() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p11c90b00} fill="var(--fill-0, #66256A)" id="Vector" stroke="var(--stroke-0, #66256A)" strokeWidth="0.5" />
        </g>
      </svg>
    </div>
  );
}

export default function ChevronDown() {
  return (
    <div className="relative size-full" data-name="Chevron Down">
      <Icon />
    </div>
  );
}