export default function Toolbar ({filters, selected, onSelectFilter}) {
    return (
        <div>
            {filters.map((filter, index) => (
                <button
                    key={index}
                    className={selected === filter ? 'selected' : ''}
                    onClick={() => onSelectFilter(filter)}
                >
                    {filter}
                </button>
            ))}
        </div>
    )
}