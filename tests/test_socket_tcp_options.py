import json
import os
import unittest

class TestSocketTcpOptions(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'posix_socket_tcp_nodelay.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_tcp_options(self):
        self.assertEqual(self.data['TCP_NODELAY'], 1)
        self.assertEqual(self.data['TCP_NOPUSH'], 4)

if __name__ == '__main__':
    unittest.main()
