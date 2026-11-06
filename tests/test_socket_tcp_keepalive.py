import json
import os
import unittest

class TestSocketTcpKeepalive(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'posix_socket_tcp_keepalive.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_keepalive(self):
        self.assertEqual(self.data['TCP_KEEPIDLE'], 256)
        self.assertEqual(self.data['TCP_FASTOPEN'], 1025)

if __name__ == '__main__':
    unittest.main()
