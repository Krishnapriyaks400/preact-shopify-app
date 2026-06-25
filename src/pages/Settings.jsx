

const Settings = () => {


  return (
    <s-page heading="Settings" inlineSize="large">
      <s-section heading="Settings">
        <s-button
          onClick={() => {
            console.log('settings')
          }}
        >
          Settings
        </s-button>
      </s-section>
    </s-page>
  );
};

export default Settings;
