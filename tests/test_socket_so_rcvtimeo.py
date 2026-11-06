import json
import os
import unittest

class TestSocketTimeout(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'posix_socket_so_rcvtimeo_specs.json')
        with open(p, 'r') as f:
            self.data = json.load(f)

    def test_timeouts(self):
        self.assertEqual(self.data['SO_RCVTIMEO'], 4102)
        self.assertEqual(self.data['timeval_usec_max'], 999999)

if __name__ == '__main__':
    unittest.main()
