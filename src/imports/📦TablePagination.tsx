import svgPaths from "./svg-lmxyic4j71";
import clsx from "clsx";
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={additionalClassNames}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return <Wrapper2 additionalClassNames={clsx("size-[24px]", additionalClassNames)}>{children}</Wrapper2>;
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <Wrapper2 additionalClassNames={clsx("relative size-[24px]", additionalClassNames)}>
      <g id="Vector">{children}</g>
    </Wrapper2>
  );
}
type BackgroundProps = {
  additionalClassNames?: string;
};

function Background({ additionalClassNames = "" }: BackgroundProps) {
  return (
    <div className={clsx("absolute bg-white h-[48px] left-0 right-0 rounded-[4px] top-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[#4d4a4f] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

export default function TablePagination() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative size-full" data-name="📦 Table Pagination">
      <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Dropdown Layout">
        <div className="content-stretch flex items-start overflow-clip pb-0 pt-[12px] px-0 relative shrink-0" data-name="Rows per Page Layout">
          <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#211e22] text-[14px] text-nowrap">
            <p className="leading-[20px]">Rows per Page</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] isolate items-start relative shrink-0" data-name="📦 Dropdown">
          <div className="h-[48px] relative shrink-0 w-full z-[2]" data-name="Label + Right Icon">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center leading-[0] pl-[16px] pr-0 py-0 relative size-full">
                <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#4d4a4f] text-[14px] text-nowrap">
                  <p className="leading-[20px]">50</p>
                </div>
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Chevron Icon">
                  <div className="[grid-area:1_/_1] content-stretch flex items-start ml-0 mt-0 relative" data-name="Tap Target">
                    <div className="shrink-0 size-[48px]" data-name="Fixed Size" />
                  </div>
                  <div className="[grid-area:1_/_1] ml-[12px] mt-[12px] overflow-clip relative size-[24px]" data-name="Chevron Down">
                    <Wrapper1 additionalClassNames="absolute left-0 top-0">
                      <path d={svgPaths.p11c90b00} fill="var(--fill-0, #211E22)" id="Vector" stroke="var(--stroke-0, #211E22)" strokeWidth="0.5" />
                    </Wrapper1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Background additionalClassNames="z-[1]" />
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Page Number Layout">
        <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#211e22] text-[14px] text-nowrap">
          <p className="leading-[20px]">Page</p>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] isolate items-start relative shrink-0" data-name="📦 Text Input">
          <div className="content-stretch flex gap-[8px] h-[48px] items-center pl-[16px] pr-0 py-0 relative shrink-0 z-[3]" data-name="Left Icon + Label + Right Icon">
            <div className="content-stretch flex gap-[8px] items-center pl-0 pr-[16px] py-0 relative shrink-0" data-name="Left Icon + User Value">
              <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#211e22] text-[14px] text-nowrap">
                <p className="leading-[20px]">1</p>
              </div>
            </div>
          </div>
          <Background additionalClassNames="z-[2]" />
        </div>
        <div className="content-stretch flex font-['Lato:Regular',sans-serif] items-start leading-[0] not-italic relative shrink-0 text-[#211e22] text-[14px]" data-name="Layout">
          <div className="flex flex-col justify-center relative shrink-0 w-[19px]">
            <p className="leading-[20px]">{`of `}</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-nowrap">
            <p className="leading-[20px]">#</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[16px] items-center px-0 py-[12px] relative shrink-0 w-[144px]" data-name="Icon Controls">
        <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="📦 System Icon">
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Layout">
            <Wrapper additionalClassNames="[grid-area:1_/_1] ml-0 mt-0">
              <path d={svgPaths.p38a03d80} fill="var(--fill-0, #93939A)" />
              <path d={svgPaths.pc1bae80} fill="var(--fill-0, #93939A)" />
              <path d={svgPaths.p38a03d80} stroke="var(--stroke-0, #93939A)" strokeWidth="0.5" />
              <path d={svgPaths.pc1bae80} stroke="var(--stroke-0, #93939A)" strokeWidth="0.5" />
            </Wrapper>
          </div>
        </div>
        <Wrapper1 additionalClassNames="relative shrink-0">
          <path d={svgPaths.p2b9e1800} fill="var(--fill-0, #4D4A4F)" id="Vector" stroke="var(--stroke-0, #4D4A4F)" strokeWidth="0.5" />
        </Wrapper1>
        <div className="relative shrink-0 size-[24px]" data-name="Advance by One Control">
          <div aria-hidden="true" className="absolute border-[#66256a] border-[0px_0px_1.5px] border-solid inset-0 pointer-events-none" />
          <div className="absolute inset-0 overflow-clip" data-name="Icon">
            <div className="absolute h-[14.995px] left-[9px] top-[4.51px] w-[8.003px]" data-name="Vector">
              <div className="absolute inset-[-1.67%_-3.12%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.50304 15.495">
                  <path d={svgPaths.p18e21900} fill="var(--fill-0, #66256A)" id="Vector" stroke="var(--stroke-0, #66256A)" strokeWidth="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Wrapper additionalClassNames="shrink-0">
          <path d={svgPaths.pb64e140} fill="var(--fill-0, #4D4A4F)" />
          <path d={svgPaths.p349aac80} fill="var(--fill-0, #4D4A4F)" />
          <path d={svgPaths.pb64e140} stroke="var(--stroke-0, #4D4A4F)" strokeWidth="0.5" />
          <path d={svgPaths.p349aac80} stroke="var(--stroke-0, #4D4A4F)" strokeWidth="0.5" />
        </Wrapper>
      </div>
    </div>
  );
}