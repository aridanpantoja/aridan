export function Background() {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 -z-10 w-full overflow-hidden">
      <div className="absolute top-0 -z-10 h-full w-full">
        <div className="absolute -right-60 bottom-auto top-0 -z-20 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-primary/60 opacity-30 blur-[100px] lg:bg-primary" />
      </div>

      <div className="absolute top-[600px] -z-10 h-fit">
        <div className="absolute -bottom-40 -left-20 top-0 -z-20 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-primary/20 opacity-60 blur-[80px] lg:bg-primary/70" />
      </div>

      <div className="absolute -z-20 h-full w-full">
        <div className="absolute bottom-0 left-0 right-0 top-0 -z-20 bg-[linear-gradient(to_right,#ad6df426_1px,transparent_1px),linear-gradient(to_bottom,#ad6df426_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_40%_40%_at_0%_0%,#000_40%,transparent_110%)]" />
      </div>

      <div className="absolute -z-20 h-full w-full">
        <div className="absolute bottom-0 left-0 right-0 top-0 -z-20 bg-[linear-gradient(to_right,#ad6df426_1px,transparent_1px),linear-gradient(to_bottom,#ad6df426_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_40%_40%_at_100%_30%,#000_10%,transparent_80%)] " />
      </div>
    </div>
  )
}
