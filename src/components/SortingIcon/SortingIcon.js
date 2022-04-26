export const SortingIcon = ({ column, sortColumn, direction }) => {
  let icon = '↕';
  if (column === sortColumn) {
    icon = direction === 'asc' ? '↑' : '↓';
  }

  return (
    <span className="icon" aria-hidden="true">{icon}</span>
  );
}
