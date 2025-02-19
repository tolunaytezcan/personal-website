const ResumeSection = ({ title, children }) => {
  return (
    <section className="w-full">
      <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
      {children}
    </section>
  );
};

export default ResumeSection; 