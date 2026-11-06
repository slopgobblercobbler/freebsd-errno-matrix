import json
import os
import unittest

class TestSocketReuseportLb(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'posix_socket_so_reuseport_lb.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_reuseport_lb(self):
        self.assertEqual(self.data['SO_REUSEPORT_LB'], 65536)
        self.assertEqual(self.data['lb_hash_algo'], 'INCOMING_FLOW')

if __name__ == '__main__':
    unittest.main()
