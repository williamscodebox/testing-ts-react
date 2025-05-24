function ProgramLists({ languages }: { languages: string[] }) {
  if (languages.length === 0) {
    return <div>No languages available</div>;
  }
  return (
    <div>
      <ul>
        {languages.map((language, index) => (
          <li key={index} className="text-white text-2xl font-bold">
            {language}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProgramLists;
