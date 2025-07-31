const Empty = () => {
  return (
    <div className="text-center absolute left-1/2 top-1/2 -translate-1/2">
      <div className="text-5xl mb-4">📭</div>
      <h3 className="text-2xl font-semibold mb-2">No courses found</h3>
      <p className="text-soft-white">
        We couldn't find any courses matching your criteria
      </p>
    </div>
  );
};

export default Empty;
