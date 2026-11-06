import json
import os
import unittest

class TestSocketListenBacklog(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'posix_socket_so_listen_backlog.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_backlog(self):
        self.assertEqual(self.data['SOMAXCONN'], 128)
        self.assertEqual(self.data['SO_ACCEPTFILTER'], 4096)

if __name__ == '__main__':
    unittest.main()
