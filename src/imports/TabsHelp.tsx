import svgPaths from "./svg-wv3l2ymkmi";
type SegmentTextProps = {
  text: string;
};

function SegmentText({ text }: SegmentTextProps) {
  return (
    <div className="bg-[#d1d1d6] content-stretch flex flex-col h-[48px] items-center justify-center overflow-clip px-[16px] py-[12px] relative shrink-0">
      <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#211e22] text-[14px] text-center text-nowrap">
        <p className="leading-[20px]">{text}</p>
      </div>
    </div>
  );
}

export default function TabsHelp() {
  return (
    <div className="relative size-full" data-name="Tabs + Help">
      <div className="absolute bg-[#d1d1d6] content-stretch flex items-center left-0 top-0" data-name="Tabs">
        <div className="content-stretch flex items-start relative shrink-0" data-name="📦 Tabs">
          <div className="content-stretch flex items-start relative shrink-0" data-name="Layout">
            <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
            <div className="bg-white h-[48px] relative shrink-0" data-name="Segment 1">
              <div className="content-stretch flex flex-col h-full items-center overflow-clip relative rounded-[inherit]">
                <div className="h-[36px] relative shrink-0 w-full" data-name="Layout">
                  <div aria-hidden="true" className="absolute border-[#66256a] border-[2px_0px_0px] border-solid inset-0 pointer-events-none" />
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center pb-0 pt-[12px] px-[16px] relative size-full">
                      <div className="flex flex-col font-['Lato:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#66256a] text-[14px] text-center text-nowrap">
                        <p className="leading-[20px]">Label</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[0px_1px] border-solid inset-0 pointer-events-none" />
            </div>
            <SegmentText text="Label" />
            <SegmentText text="Label" />
            <SegmentText text="Label" />
            <SegmentText text="Label" />
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col isolate items-start overflow-clip right-[-1px] top-0" data-name="Help Button">
        <div className="content-stretch flex flex-col isolate items-start overflow-clip relative shrink-0 z-[1]" data-name="Layout">
          <div className="content-stretch flex gap-[4px] isolate items-center justify-center relative shrink-0 w-full z-[1]" data-name="Content">
            <div className="overflow-clip relative shrink-0 size-[24px] z-[3]" data-name="Help Center">
              <div className="absolute left-0 size-[24px] top-0" data-name="Icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g id="Icon">
                    <g id="Vector">
                      <path d={svgPaths.p1ee90f80} fill="var(--fill-0, #66256A)" />
                      <path d={svgPaths.p33b14100} fill="var(--fill-0, #66256A)" />
                      <path clipRule="evenodd" d={svgPaths.pf514200} fill="var(--fill-0, #66256A)" fillRule="evenodd" />
                      <path d={svgPaths.p1ee90f80} stroke="var(--stroke-0, #66256A)" strokeWidth="0.5" />
                      <path d={svgPaths.p33b14100} stroke="var(--stroke-0, #66256A)" strokeWidth="0.5" />
                      <path clipRule="evenodd" d={svgPaths.pf514200} fillRule="evenodd" stroke="var(--stroke-0, #66256A)" strokeWidth="0.5" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#66256a] text-[14px] text-nowrap z-[2]">
              <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[20px] underline">Help</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}