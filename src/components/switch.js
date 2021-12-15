export default function CustomSwitch({ checked, handleToggle }) {
  return (
    <>
      <input
        type="checkbox"
        onChange={e => handleToggle(e.target.value)}
        checked={checked}
        className="switch-input"
        name="switch-input-id"
        id="switch-input-id"
      />

      <label
        // style={{ background: checked && "var(--switch-on-background)" }}
        className="switch-label"
        htmlFor="switch-input-id">
        <span className="switch-span" />
      </label>
    </>
  );
}
