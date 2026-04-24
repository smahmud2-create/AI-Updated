import svgPaths from "./svg-n3y0hzjf12";

export default function ButtonDarkMode() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Button/Dark Mode">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip relative shrink-0" data-name="📦 Button">
        <div className="content-stretch flex flex-col h-[48px] isolate items-start overflow-clip relative shrink-0 z-[1]" data-name="Layout">
          <div className="h-[48px] relative shrink-0 w-full z-[2]" data-name="Content">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[4px] isolate items-center justify-center px-[12px] py-0 relative size-full">
                <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white z-[2]">
                  <p className="leading-[20px]">More Actions</p>
                </div>
                <div className="overflow-clip relative shrink-0 size-[24px] z-[1]" data-name="Chevron Down">
                  <div className="absolute left-0 size-[24px] top-0" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g id="Icon">
                        <path d={svgPaths.p11c90b00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.5" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 rounded-[4px] z-[1]" data-name="Background">
            <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px]" />
          </div>
        </div>
      </div>
    </div>
  );
}