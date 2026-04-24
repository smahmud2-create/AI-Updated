import svgPaths from "./svg-t47ohef15f";

export default function Avatar() {
  return (
    <div className="content-stretch flex gap-[5.532px] items-center justify-center overflow-clip p-[5.532px] relative rounded-[102px] size-full" data-name="Avatar">
      <div className="absolute backdrop-blur-[2.074px] bg-[rgba(148,37,188,0.24)] h-[56px] left-0 top-[-4px] w-[52px]" />
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
        <div className="bg-[rgba(122,39,152,0.5)] blur-[6.6px] col-1 h-[32px] ml-0 mt-0 rounded-[32px] row-1 w-[28px]" />
        <div className="col-1 h-[26.927px] ml-px mt-[3.54px] relative row-1 w-[26px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26.9273">
            <g id="Group 1459">
              <path d={svgPaths.p2982d400} fill="var(--fill-0, #FDFDFD)" id="Vector" />
              <path d={svgPaths.p6a74600} fill="var(--fill-0, #FDFDFD)" id="Vector_2" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_4.2px_0px_#c673e5,inset_2.213px_2.766px_3.319px_0px_rgba(255,255,255,0.4),inset_-0.553px_1.66px_2.213px_0px_rgba(255,255,255,0.4)]" />
    </div>
  );
}