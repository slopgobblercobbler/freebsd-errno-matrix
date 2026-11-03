import json
import os
import unittest

class TestSolSocket(unittest.TestCase):
    def setUp(self):
        p = os.path.join(os.path.dirname(__file__), '..', 'src', 'socket_options.json')
        with open(p, 'r') as f:
            self.data = json.load(f)['SOL_SOCKET']

    def test_buffer_sizes(self):
        self.assertGreater(self.data['SO_SNDBUF'], 0)
        self.assertGreater(self.data['SO_RCVBUF'], 0)

    def test_boolean_flags(self):
        self.assertEqual(self.data['SO_KEEPALIVE'], 8)
        self.assertEqual(self.data['SO_REUSEADDR'], 4)

if __name__ == '__main__':
    unittest.main()
