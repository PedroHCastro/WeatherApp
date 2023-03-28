import React from 'react';

type Props = {
  children?: React.ReactNode;
};

const CombineProviders = (providers: React.FC<Props>[]) => {
  const combiner = (
    PreviousProviders: React.FC<Props>,
    CurrentProviders: React.FC<Props>,
  ) => {
    const renderChildren = ({children}: Props): JSX.Element => (
      <PreviousProviders>
        <CurrentProviders>{children}</CurrentProviders>
      </PreviousProviders>
    );

    return renderChildren;
  };
  return providers.reduce(combiner, ({children}: Props) => <>{children}</>);
};

export default CombineProviders;
