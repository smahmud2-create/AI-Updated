import svgPaths from "./svg-1xwk57yuxc";

function Icon() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1fb0e400} fill="var(--fill-0, #211E22)" id="Vector" stroke="var(--stroke-0, #211E22)" strokeWidth="0.5" />
        </g>
      </svg>
    </div>
  );
}

export default function Search() {
  return (
    <div className="relative size-full" data-name="Search">
      <Icon />
    </div>
  );
}