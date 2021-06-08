import { Helmet } from 'react-helmet-async';

function PageTitle({ title }: Title) {
  return (
    <Helmet>
      <title>{title} | NomadeCoffee</title>
    </Helmet>
  );
}

type Title = {
  title: string;
};

export default PageTitle;
