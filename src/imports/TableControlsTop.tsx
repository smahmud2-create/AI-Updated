import svgPaths from "./svg-auw05wtm39";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[48px] relative shrink-0 w-full z-[2]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] isolate items-center justify-center px-[12px] py-0 relative size-full">{children}</div>
      </div>
    </div>
  );
}
type LinkTextProps = {
  text: string;
};

function LinkText({ text }: LinkTextProps) {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Lato:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#f1e9f1] text-[14px] text-nowrap underline">{text}</p>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <p className="font-['Lato:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white">{text}</p>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <p className="font-['Lato:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white">{text}</p>
    </div>
  );
}
type ContentTextProps = {
  text: string;
};

function ContentText({ text }: ContentTextProps) {
  return (
    <Wrapper>
      <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#66256a] text-[14px] text-nowrap z-[2]">
        <p className="leading-[20px]">{text}</p>
      </div>
    </Wrapper>
  );
}

export default function TableControlsTop() {
  return (
    <div className="bg-[#66256a] content-stretch flex flex-col items-center justify-center px-[24px] py-0 relative size-full" data-name="Table Controls - Top">
      <div className="h-[48px] relative shrink-0 w-full" data-name="Data Summary">
        <div className="absolute content-stretch flex gap-[14px] items-start right-0 top-0" data-name="Bulk Action CTAs">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button/Dark Mode">
            <div className="content-stretch flex flex-col isolate items-start overflow-clip relative shrink-0" data-name="📦 Button">
              <div className="content-stretch flex flex-col h-[48px] isolate items-start overflow-clip relative shrink-0 z-[1]" data-name="Layout">
                <Wrapper>
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
                </Wrapper>
                <div className="absolute inset-0 rounded-[4px] z-[1]" data-name="Background">
                  <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button/Dark Mode">
            <div className="content-stretch flex flex-col isolate items-start relative shrink-0" data-name="📦 Button">
              <div className="content-stretch flex flex-col isolate items-start overflow-clip relative shrink-0 z-[1]" data-name="Layout">
                <ContentText text="Edit" />
                <div className="absolute bg-[#f1e9f1] inset-0 rounded-[4px] z-[1]" data-name="Background" />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button/Dark Mode">
            <div className="content-stretch flex flex-col isolate items-start relative shrink-0" data-name="📦 Button">
              <div className="content-stretch flex flex-col isolate items-start overflow-clip relative shrink-0 z-[1]" data-name="Layout">
                <ContentText text="Export" />
                <div className="absolute bg-[#f1e9f1] inset-0 rounded-[4px] z-[1]" data-name="Background" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex gap-[8px] items-start left-0 top-[14px]" data-name="Results">
          <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Result Count">
            <Text1 text="##" />
            <Text text="Selected (of" />
            <Text1 text="##" />
            <Text text="Objects)" />
          </div>
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Link">
            <LinkText text="Deselect All" />
          </div>
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Link">
            <LinkText text="Select All" />
          </div>
        </div>
      </div>
    </div>
  );
}