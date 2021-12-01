export default function RxFigureInput({inputName, onChangeFn, value }) {
    return (
      <label>
        <span>{inputName}</span>
        <input
          required
          min="0"
          type="number"
          onChange={ onChangeFn }
          value={ value }
        />
      </label>
    );
}
