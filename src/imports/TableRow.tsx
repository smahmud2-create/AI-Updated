import svgPaths from "./svg-p1qp2il4bv";

function FixedSize() {
  return <div className="shrink-0 size-[32px]" data-name="Fixed Size" />;
}

function TapTarget() {
  return (
    <div className="col-1 content-stretch flex items-center justify-center ml-0 mt-0 relative row-1" data-name=".🛠 Tap Target">
      <FixedSize />
    </div>
  );
}

function BaseCheckbox() {
  return <div className="bg-[#66256a] border-[#66256a] border-[1.5px] border-solid col-1 ml-[6px] mt-[6px] rounded-[2px] row-1 size-[20px]" data-name="Base Checkbox" />;
}

function Icon() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p358cb000} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="col-1 ml-[4px] mt-[4px] overflow-clip relative row-1 size-[24px]" data-name="Icon">
      <Icon />
    </div>
  );
}

function ControlTapTarget() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="Control + Tap Target">
      <TapTarget />
      <BaseCheckbox />
      <Icon1 />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="content-stretch flex items-center relative rounded-[2px] shrink-0" data-name="📦 Checkbox">
      <ControlTapTarget />
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="absolute content-stretch flex items-start left-[8px] top-[8px]" data-name="Checkbox">
      <Checkbox />
    </div>
  );
}

function CheckboxWithPadding() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Checkbox with Padding">
      <Checkbox1 />
    </div>
  );
}

function RowContent() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-1/2 translate-y-[-50%]" data-name="Row Content">
      <div className="shrink-0 size-[48px]" data-name="Spacer - Expandable Row" />
      <CheckboxWithPadding />
      <div className="h-[48px] shrink-0 w-[150px]" data-name="Spacer - Object ID" />
    </div>
  );
}

export default function TableRow() {
  return (
    <div className="relative size-full" data-name="Table Row">
      <div className="absolute bg-[#dbc5db] inset-0 mix-blend-darken" data-name="Background" />
      <RowContent />
    </div>
  );
}