const PageTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#00ff99]">
        {title}
      </h1>
      <p className="text-lg text-neutral-400">{subtitle}</p>
    </div>
  );
};

export default PageTitle; 