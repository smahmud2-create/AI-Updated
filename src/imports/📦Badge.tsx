export default function Badge() {
  return (
    <div className="content-stretch flex items-start relative size-full" data-name="📦 Badge">
      <div className="content-stretch flex isolate items-center justify-center px-[8px] py-0 relative shrink-0" data-name="Layout">
        <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11.2px] text-center text-nowrap text-white z-[2]">
          <p className="leading-[16px]">Badge</p>
        </div>
        <div className="absolute bg-[#66256a] inset-0 rounded-[2px] z-[1]" data-name="Background" />
      </div>
    </div>
  );
}