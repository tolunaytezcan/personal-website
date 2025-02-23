const PageTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center pb-8">
      <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-[#00ff99]">
        {title}
      </h1>
      <p className="text-base lg:text-lg text-neutral-400 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
};

export default PageTitle; 