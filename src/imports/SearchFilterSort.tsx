import svgPaths from "./svg-lsyuuifzbe";

function Content({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[48px] relative shrink-0 w-full z-[2]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] isolate items-center justify-center px-[12px] py-0 relative size-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute left-0 size-[24px] top-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-white inset-0 rounded-[4px] z-[1]">
      <div aria-hidden="true" className="absolute border border-[#66256a] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#66256a] text-[14px] text-nowrap z-[2]">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[20px] underline">{text}</p>
    </div>
  );
}

function Icon() {
  return (
    <Wrapper>
      <path d={svgPaths.p11c90b00} fill="var(--fill-0, #66256A)" id="Vector" stroke="var(--stroke-0, #66256A)" strokeWidth="0.5" />
    </Wrapper>
  );
}

export default function SearchFilterSort() {
  return (
    <div className="relative size-full" data-name="Search + Filter + Sort">
      <div className="absolute content-stretch flex gap-[8px] items-start left-0 top-0" data-name="Search + Filter">
        <div className="content-stretch flex flex-col gap-[8px] isolate items-start relative shrink-0 w-[320px]" data-name="Search">
          <div className="h-[48px] relative shrink-0 w-full z-[3]" data-name="Left Icon + Label + Right Icon">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-0 py-0 relative size-full">
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Left Icon + Label">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex gap-[8px] items-center pl-0 pr-[8px] py-0 relative w-full">
                      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Search">
                        <Wrapper>
                          <path d={svgPaths.p1fb0e400} fill="var(--fill-0, #211E22)" id="Vector" stroke="var(--stroke-0, #211E22)" strokeWidth="0.5" />
                        </Wrapper>
                      </div>
                      <div className="basis-0 flex flex-col font-['Lato:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#4d4a4f] text-[14px]">
                        <p className="leading-[20px]">Search</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-white h-[48px] left-0 right-0 rounded-[4px] top-0 z-[2]" data-name="Background">
            <div aria-hidden="true" className="absolute border-[#4d4a4f] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Filters">
          <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Quick Filter 1">
            <div className="content-stretch flex flex-col isolate items-start overflow-clip relative shrink-0" data-name="📦 Button">
              <div className="content-stretch flex flex-col isolate items-start overflow-clip relative shrink-0 z-[1]" data-name="Layout">
                <div className="content-stretch flex gap-[4px] isolate items-center justify-center relative shrink-0 w-full z-[1]" data-name="Content">
                  <Text text="Filter (#)" />
                  <div className="overflow-clip relative shrink-0 size-[24px] z-[1]" data-name="Chevron Down">
                    <Icon />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start justify-center relative rounded-[4px] shrink-0" data-name="Quick Filter 2">
            <div className="content-stretch flex flex-col isolate items-start overflow-clip relative shrink-0" data-name="📦 Button">
              <div className="content-stretch flex flex-col isolate items-start overflow-clip relative shrink-0 z-[1]" data-name="Layout">
                <div className="content-stretch flex gap-[4px] isolate items-center justify-center relative shrink-0 w-full z-[1]" data-name="Content">
                  <Text text="Filter" />
                  <div className="overflow-clip relative shrink-0 size-[24px] z-[1]" data-name="Chevron Down">
                    <Icon />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start justify-center relative rounded-[4px] shrink-0" data-name="Quick Filter 3">
            <div className="content-stretch flex flex-col isolate items-start overflow-clip relative shrink-0" data-name="📦 Button">
              <div className="content-stretch flex flex-col isolate items-start overflow-clip relative shrink-0 z-[1]" data-name="Layout">
                <div className="content-stretch flex gap-[4px] isolate items-center justify-center relative shrink-0 w-full z-[1]" data-name="Content">
                  <Text text="Filter" />
                  <div className="overflow-clip relative shrink-0 size-[24px] z-[1]" data-name="Chevron Down">
                    <Icon />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[48px] relative shrink-0 w-[111px]" data-name=".Base/Data Table/Controls/All Filters">
            <div className="absolute content-stretch flex flex-col isolate items-start left-0 overflow-clip top-0" data-name="📦 Button">
              <div className="content-stretch flex flex-col h-[48px] isolate items-start overflow-clip relative shrink-0 z-[1]" data-name="Layout">
                <Content>
                  <div className="overflow-clip relative shrink-0 size-[24px] z-[3]" data-name="Filter">
                    <Wrapper>
                      <path clipRule="evenodd" d={svgPaths.p2736f300} fill="var(--fill-0, #66256A)" fillRule="evenodd" id="Vector" stroke="var(--stroke-1, #66256A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                    </Wrapper>
                  </div>
                  <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#66256a] text-[14px] text-nowrap z-[2]">
                    <p className="leading-[20px]">All Filters</p>
                  </div>
                </Content>
                <Background />
              </div>
            </div>
            <div className="absolute content-stretch flex items-start left-[98px] top-[-8px]" data-name="📦 Badge">
              <div className="bg-[#dbc5db] content-stretch flex flex-col h-[22px] isolate items-center justify-center overflow-clip pb-[3px] pt-[2px] px-[4px] relative rounded-[100px] shrink-0" data-name="Layout">
                <div className="content-stretch flex h-px items-start relative shrink-0 z-[2]" data-name=".🛠 Spacer">
                  <div className="shrink-0 size-[16px]" data-name="Fixed Size" />
                </div>
                <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#211e22] text-[11.2px] text-center text-nowrap z-[1]">
                  <p className="leading-[16px]">##</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col isolate items-start overflow-clip relative shrink-0" data-name="📦 Button">
            <div className="content-stretch flex flex-col isolate items-start overflow-clip relative shrink-0 z-[1]" data-name="Layout">
              <div className="content-stretch flex gap-[4px] isolate items-center justify-center relative shrink-0 w-full z-[1]" data-name="Content">
                <Text text="Reset All" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start right-0 top-0" data-name=".Base/Data Table/Controls/Sort">
        <div className="content-stretch flex flex-col isolate items-start overflow-clip relative shrink-0" data-name="📦 Button">
          <div className="content-stretch flex flex-col h-[48px] isolate items-start overflow-clip relative shrink-0 z-[1]" data-name="Layout">
            <Content>
              <div className="overflow-clip relative shrink-0 size-[24px] z-[3]" data-name="Sort Vertical">
                <Wrapper>
                  <g id="Vector">
                    <path d={svgPaths.p24da3900} fill="var(--fill-0, #66256A)" />
                    <path d={svgPaths.p5450380} fill="var(--fill-0, #66256A)" />
                    <path d={svgPaths.p24da3900} stroke="var(--stroke-0, #66256A)" strokeWidth="0.5" />
                    <path d={svgPaths.p5450380} stroke="var(--stroke-0, #66256A)" strokeWidth="0.5" />
                  </g>
                </Wrapper>
              </div>
              <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#66256a] text-[14px] text-nowrap z-[2]">
                <p className="leading-[20px]">Sort</p>
              </div>
            </Content>
            <Background />
          </div>
        </div>
      </div>
    </div>
  );
}