export default function InputFigures(figures, setFigures) {
    return (
      <div>
        <label>
          <span>Exempt Forms</span>
          <input
            min="0"
            type="number"
            handleChange={setFigures}
            value={figures}
          />
        </label>
      </div>
    );
}
