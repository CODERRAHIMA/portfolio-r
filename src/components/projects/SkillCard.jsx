function SkillCard({ skill }) {
    return (
        <div
            className="
      group
      bg-white/80
      border
      border-rose-200
      rounded-3xl
      h-26 sm:h-30
      w-35 sm:w-40
      p-5
      flex
      flex-col
      items-center
      justify-center
      gap-2 sm:gap-4
      shadow-[0_6px_20px_rgba(159,18,57,0.06)]
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-rose-400/50
      hover:shadow-[0_12px_24px_rgba(225,29,72,0.14)]
      "
        >
            {skill.image && (
                <img
                    src={skill.image}
                    alt={skill.name}
                    className="h-9 sm:h-10 w-9 sm:w-10 object-contain transition-transform duration-300 group-hover:scale-110 block"
                />
            )}
            <p className="text-slate-800 text-sm md:text-xl font-medium text-center">
                {skill.name}
            </p>
        </div>
    );
}

export default SkillCard;