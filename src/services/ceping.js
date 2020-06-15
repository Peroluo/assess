
import request from '@/utils/request';

export async function queryCurrent() {
  return request('/api/some');
}

export async function savaCurrent(params) {
  request('/api/v1/some/api', { method: 'post', data: { foo: 'bar' } });
}
