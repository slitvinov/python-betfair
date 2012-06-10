#! /usr/bin/python
import jparse
import unittest

class TestSequenceFunctions(unittest.TestCase):

    def setUp(self):
        self.seq = range(10)

    def test_npoints(self):
        self.assertEqual(jparse.npoint(2, 1, 1, 2), 0)
        self.assertEqual(jparse.npoint(2, 1, 1, 0), 2)
        self.assertEqual(jparse.npoint(1, 1, 0, 0), 1)
        self.assertEqual(jparse.npoint(1, 2, 1, 2), 3)

    def test_key_and_val(self):
        d = dict(a=10, b=42, c="b")
        self.assertTrue(jparse.key_and_val(d, "a", 10))
        self.assertFalse(jparse.key_and_val(d, "a", 12))
        self.assertFalse(jparse.key_and_val(d, "q", 12))
        self.assertTrue(jparse.key_and_val(d, "c", "b"))

if __name__ == '__main__':
    unittest.main()
