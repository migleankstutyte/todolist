import SwaggerUI from 'swagger-ui-react';

export const SwaggerDocs = () => {
  return (
    <div>
      <SwaggerUI url="http://localhost:3030/api-docs" />;
    </div>
  );
};
