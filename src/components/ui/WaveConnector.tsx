/** Gentle horizontal wave connecting a row of icons, in place of a straight line. */
export function WaveConnectorHorizontal({
  className = "absolute top-5 right-8 left-8 h-6 w-[calc(100%-4rem)]",
  colorClassName = "text-ink/20",
}: {
  className?: string;
  colorClassName?: string;
}) {
  return (
    <svg aria-hidden className={className} viewBox="0 0 600 24" preserveAspectRatio="none">
      <path
        d="M0,12 Q25,0 50,12 T100,12 T150,12 T200,12 T250,12 T300,12 T350,12 T400,12 T450,12 T500,12 T550,12 T600,12"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeDasharray="7 7"
        strokeLinecap="round"
        className={colorClassName}
      />
    </svg>
  );
}

/** A single gentle hump, sized to bridge one tight gap (e.g. between two tiles). */
export function WaveConnectorShort({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden className={className} viewBox="0 0 60 24" preserveAspectRatio="none">
      <path
        d="M0,16 Q30,2 60,16"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeDasharray="6 6"
        strokeLinecap="round"
        className="text-green-dark/40"
      />
    </svg>
  );
}
