import svgPaths from "./svg-ma463uy00g";

export default function Checkbox() {
  return (
    <div className="content-stretch flex items-start relative size-full" data-name="Checkbox">
      <div className="content-stretch flex items-center relative rounded-[2px] shrink-0" data-name="📦 Checkbox">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Control + Tap Target">
          <div className="[grid-area:1_/_1] content-stretch flex items-center justify-center ml-0 mt-0 relative" data-name=".🛠 Tap Target">
            <div className="shrink-0 size-[32px]" data-name="Fixed Size" />
          </div>
          <div className="[grid-area:1_/_1] bg-[#66256a] border-[#66256a] border-[1.5px] border-solid ml-[6px] mt-[6px] rounded-[2px] size-[20px]" data-name="Base Checkbox" />
          <div className="[grid-area:1_/_1] ml-[4px] mt-[4px] overflow-clip relative size-[24px]" data-name="Icon">
            <div className="absolute left-0 size-[24px] top-0" data-name="Icon">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id="Icon">
                  <path d={svgPaths.p134e6200} fill="var(--fill-0, white)" id="Vector" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}