import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  env: {
    BACKEND_URL: 'http://localhost:6500',
  },
  async rewrites() {
    return [
      {
        source: '/aggregation-class-l',
        destination: '/AggregationClassL',
      },
      {
        source: '/aggregation-class-l/:id',
        destination: '/AggregationClassL/:id',
      },
      {
        source: '/aggregation-class-l/new',
        destination: '/AggregationClassL/new',
      },
      {
        source: '/assosiation-class-l',
        destination: '/AssosiationClassL',
      },
      {
        source: '/assosiation-class-l/:id',
        destination: '/AssosiationClassL/:id',
      },
      {
        source: '/assosiation-class-l/new',
        destination: '/AssosiationClassL/new',
      },
      {
        source: '/class-test-l',
        destination: '/ClassTestL',
      },
      {
        source: '/class-test-l/:id',
        destination: '/ClassTestL/:id',
      },
      {
        source: '/class-test-l/new',
        destination: '/ClassTestL/new',
      },
    ];
  },
};

export default nextConfig;
