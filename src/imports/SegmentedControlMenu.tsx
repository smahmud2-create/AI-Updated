import svgPaths from "./svg-xya0mncju8";

function Content({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[48px] relative shrink-0 w-full z-[1]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] isolate items-center justify-center px-[12px] py-0 relative size-full">{children}</div>
      </div>
    </div>
  );
}

export default function SegmentedControlMenu() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Segmented Control Menu">
      <div className="bg-white content-stretch flex flex-col h-[392px] items-end relative rounded-[2px] shrink-0 w-[300px]" data-name="Popover">
        <div aria-hidden="true" className="absolute border border-[#d1d1d6] border-solid inset-0 pointer-events-none rounded-[2px] shadow-[0px_3px_6px_0px_rgba(33,30,34,0.2)]" />
        <div className="h-[0.001px] relative shrink-0 w-[48px]" data-name="Caret">
          <div className="absolute inset-[-8px_0_-1.5px_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 9.5">
              <g id="Caret">
                <path d="M16 8L32 8L24 0L16 8Z" fill="var(--fill-0, #D1D1D6)" id="Caret Border" />
                <path d={svgPaths.p36768900} fill="var(--fill-0, white)" id="Caret_2" />
              </g>
            </svg>
          </div>
        </div>
        <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0 w-full" data-name="Layout">
          <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Content">
            <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
              <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name=".Base/Menu/Content/Segmented Control">
                <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip pb-[24px] pt-0 px-0 relative shrink-0 w-full" data-name="Common Filters/Checkbox">
                  <div className="h-[48px] relative shrink-0 w-full" data-name=".Base/Filter/Inputs">
                    <div className="absolute content-stretch flex items-center leading-[0] left-0 top-1/2 translate-y-[-50%]" data-name="📦 Radio Button">
                      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Control + Tap Target">
                        <div className="[grid-area:1_/_1] content-stretch flex items-center justify-center ml-0 mt-0 relative" data-name=".🛠 Tap Target">
                          <div className="shrink-0 size-[32px]" data-name="Fixed Size" />
                        </div>
                        <div className="[grid-area:1_/_1] bg-white border-[#66256a] border-[1.5px] border-solid ml-[6px] mt-[6px] relative rounded-[100px] size-[20px]" data-name="Base Radio Button">
                          <div className="absolute bg-[#66256a] left-1/2 rounded-[100px] size-[8px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Node" />
                        </div>
                      </div>
                      <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#211e22] text-[14px] text-nowrap">
                        <p className="leading-[20px]">Label</p>
                      </div>
                    </div>
                  </div>
                  {[...Array(7).keys()].map((_, i) => (
                    <div className="h-[48px] relative shrink-0 w-full" data-name=".Base/Filter/Inputs">
                      <div className="absolute content-stretch flex items-center leading-[0] left-0 top-1/2 translate-y-[-50%]" data-name="📦 Radio Button">
                        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Control + Tap Target">
                          <div className="[grid-area:1_/_1] content-stretch flex items-center justify-center ml-0 mt-0 relative" data-name=".🛠 Tap Target">
                            <div className="shrink-0 size-[32px]" data-name="Fixed Size" />
                          </div>
                          <div className="[grid-area:1_/_1] bg-white border-[#4d4a4f] border-[1.5px] border-solid ml-[6px] mt-[6px] rounded-[100px] size-[20px]" data-name="Base Radio Button" />
                        </div>
                        <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#211e22] text-[14px] text-nowrap">
                          <p className="leading-[20px]">Label</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="content-stretch flex gap-[8px] items-start pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[#d1d1d6] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
                  <div className="basis-0 content-stretch flex flex-col grow isolate items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="📦 Button">
                    <Content>
                      <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#66256a] text-[14px] text-nowrap z-[3]">
                        <p className="leading-[20px]">Cancel</p>
                      </div>
                      <div className="absolute bg-white inset-0 rounded-[4px] z-[1]" data-name="Background">
                        <div aria-hidden="true" className="absolute border border-[#66256a] border-solid inset-0 pointer-events-none rounded-[4px]" />
                      </div>
                    </Content>
                  </div>
                  <div className="basis-0 content-stretch flex flex-col grow isolate items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="📦 Button">
                    <Content>
                      <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white z-[3]">
                        <p className="leading-[20px]">Apply</p>
                      </div>
                      <div className="absolute bg-[#66256a] h-[48px] left-0 right-0 rounded-[4px] top-0 z-[1]" data-name="Background">
                        <div aria-hidden="true" className="absolute border border-[#66256a] border-solid inset-0 pointer-events-none rounded-[4px]" />
                      </div>
                    </Content>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}